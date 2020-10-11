export enum CommonGroups {
  DEFAULT = 'default',
  BUILT_AT_RUNTIME = 'built-at-runtime',
  FALLBACK_KNOWLS_BUILT_AT_RUNTIME = 'fallback-knowls-built-at-run-time'
}

export enum BlockTypes {
  TEXT = 'text',
  URL = 'url',
  FILE = 'file',
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio',
  COMPLEX = 'complex',
  SELECT = 'select',
  FUNCTION = 'function'
}

export enum VoiceAction {
  ASK = 'ask',
  TELL = 'tell'
}

export enum TwilioVerb {
  GATHER = 'gather',
  RECORD = 'record',
  HANG_UP = 'hang-up',
  PAUSE = 'pause'
}

export enum JovoStates {
  YES_NO_STATE = 'YesNoState'
}

export enum MessengerMessageTags {
  ACCOUNT_UPDATE = 'ACCOUNT_UPDATE'
}

export enum Languages {
  ANY = 'any',
  ENGLISH = 'en',
  DUTCH = 'nl',
  WELSH = 'cy',
  ITALIAN = 'it'
}

export enum AlexaUserInfo {
  FULL_DEVICE_ADDRESS = 'full-device-address',
  MOBILE_NUMBER = 'mobile-number'
}
