export default interface BlockObj {
  version: number;
  blockId: string;
  created: Date;
  deleted?: boolean;
  delay?: number;
  module?: string;
  name: string;
  group: string;
  type: string;
  next?: string;
  onReply?: {
    blockId: string;
    args?: any;
  };
  formFieldCallback?: {
    formId: string;
    args: any;
  };
  intentMap?: any;
  voiceAction?: string;
  content: {
    title?: {
      any?: string;
      en?: string;
      nl?: string;
      cy?: string;
      it?: string;
    };
    text?: {
      default: {
        any?: string;
        en?: string;
        nl?: string;
        cy?: string;
        it?: string;
      };
    };
    image?: string;
    video?: string;
    items?: Array<{
      title?: {
        any?: string;
        en?: string;
        nl?: string;
        cy?: string;
        it?: string;
      };
      subtitle?: {
        any?: string;
        en?: string;
        nl?: string;
        cy?: string;
        it?: string;
      };
      image?: string;
      choices?: Array<{
        title?: {
          any?: string;
          en?: string;
          nl?: string;
          cy?: string;
          it?: string;
        };
        selectedTitle?: string;
        action: {
          type: string;
          value?: any;
        };
        profile?: any;
        userStatus?: string;
        formField?: boolean;
        session?: any;
        functionArgs?: any;
        persistentMenu?: boolean;
        selectBlock?: {
          id: string;
        };
      }>;
      defaultChoice?: {
        title?: {
          any?: string;
          en?: string;
          nl?: string;
          cy?: string;
          it?: string;
        };
        selectedTitle?: string;
        action: {
          type: string;
          value?: any;
        };
        profile?: any;
        userStatus?: string;
        formField?: boolean;
        session?: any;
        functionArgs?: any;
        persistentMenu?: boolean;
        selectBlock?: {
          id: string;
        };
      };
    }>;
    defaultChoice?: {
      title?: {
        any?: string;
        en?: string;
        nl?: string;
        cy?: string;
        it?: string;
      };
      selectedTitle?: string;
      action: {
        type: string;
        value?: any;
      };
      profile?: any;
      userStatus?: string;
      formField?: boolean;
      session?: any;
      functionArgs?: any;
      persistentMenu?: boolean;
      selectBlock?: {
        id: string;
      };
    };
  };
  function?: {
    name: string;
    args: any;
    formId?: string;
    todo?: boolean;
    tempText?: {
      any?: string;
      en?: string;
      nl?: string;
      cy?: string;
      it?: string;
    };
    tempChoices: Array<{
      title?: {
        any?: string;
        en?: string;
        nl?: string;
        cy?: string;
        it?: string;
      };
      selectedTitle?: string;
      action: {
        type: string;
        value?: any;
      };
      profile?: any;
      userStatus?: string;
      formField?: boolean;
      session?: any;
      functionArgs?: any;
      persistentMenu?: boolean;
      selectBlock?: {
        id: string;
      };
    }>;
    webhook?: boolean;
    modules?: string[];
  };
  meta: {
    description?: string;
    choiceType?: string;
    complexBlockType?: string;
    topElementStyle?: string;
    imageAspectRatio?: string;
    messengerTag?: string;
    textOverflow?: string;
    twilioVerb?: string;
    twilioVerbAttributes?: any;
    twilioGatherRepeats?: number;
    jovoFollowUpState?: string;
    alexaPermissionRequired?: string;
  };
  _id?: any;
}
