import ObjectId from 'bson-objectid';
import BlockObj from './objs/block-obj';
import { DeepPartial } from './helpers/helpers';
import {
  AlexaUserInfo,
  BlockTypes,
  CommonGroups,
  JovoStates,
  Languages,
  MessengerMessageTags,
  TwilioVerb,
  VoiceAction
} from './interfaces/block-interface';
import BlockPointerObj from './objs/block-pointer-obj';

type DeepPartialObj = DeepPartial<BlockObj>;

export default class BlockObjBuilder {
  public static DEFAULT_NAME = CommonGroups.BUILT_AT_RUNTIME;
  public static DEFAULT_GROUP = CommonGroups.BUILT_AT_RUNTIME;

  public obj: DeepPartial<BlockObj>;

  constructor() {
    this.obj = {
      name: BlockObjBuilder.DEFAULT_NAME,
      group: BlockObjBuilder.DEFAULT_GROUP,
      version: 2,
      blockId: new ObjectId().toHexString(),
      created: new Date(),
      content: {},
      meta: {}
    };
  }

  public addTitle(lang: Languages, title: string): this {
    const content = this.obj.content;
    if (!content.title) {
      content.title = {};
    }
    content.title[lang] = title;
    return this;
  }

  public name(s: string): this {
    this.obj.name = s;
    return this;
  }

  public group(s: string): this {
    if (s === '') {
      s = 'default';
    }
    this.obj.group = s;
    return this;
  }

  public module(module: string): this {
    this.obj.module = module;
    return this;
  }

  public description(description: string): this {
    this.obj.meta.description = description;
    return this;
  }

  public type(bt: BlockTypes): this {
    this.obj.type = bt;
    return this;
  }

  public blockId(blockId: string): this {
    this.obj.blockId = blockId;
    return this;
  }

  public next(blockId: string): this {
    this.obj.next = blockId;
    return this;
  }

  public onReply(blockId: string, args?: any): this {
    this.obj.onReply = {
      blockId,
      args
    };
    return this;
  }

  public formFieldCallback(formId: string, args: any): this {
    this.obj.formFieldCallback = {
      formId,
      args
    };
    return this;
  }

  public voiceAction(voiceAction: VoiceAction): this {
    this.obj.voiceAction = voiceAction;
    return this;
  }

  public twilioVerb(twilioVerb: TwilioVerb): this {
    this.obj.meta.twilioVerb = twilioVerb;
    return this;
  }

  public twilioVerbAttributes(verbAttributes: any): this {
    this.obj.meta.twilioVerbAttributes = verbAttributes;
    return this;
  }

  public twilioGatherRepeats(numRepeats: number): this {
    this.obj.meta.twilioGatherRepeats = numRepeats;
    return this;
  }

  public jovoFollowUpState(state: JovoStates): this {
    this.obj.meta.jovoFollowUpState = state;
    return this;
  }

  public messengerTag(tag: MessengerMessageTags): this {
    this.obj.meta.messengerTag = tag;
    return this;
  }

  public addIntent(intentName: string, blockPointer: BlockPointerObj): this {
    if (!this.obj.intentMap) {
      this.obj.intentMap = {};
    }
    this.obj.intentMap[intentName] = blockPointer;
    return this;
  }

  public alexaPermissionRequired(userInfo: AlexaUserInfo): this {
    this.obj.meta.alexaPermissionRequired = userInfo;
    return this;
  }

  public build(): DeepPartialObj {
    return this.obj;
  }
}
