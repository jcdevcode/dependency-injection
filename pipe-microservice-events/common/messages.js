const INTERNAL_ERROR = {
  message: 'Some error was ocurred', 
  codeApi: 'EA0000', 
  codeUser: 'E0004'
}

const DEVICE_IS_REQUIRED = {
  message: 'The device identifier is required.', 
  codeApi: 'EA0020', 
  codeUser: null
}

const TITLE_IS_REQUIRED = {
  message: 'The title of notification is required.', 
  codeApi: 'EA0021', 
  codeUser: null
}

const BODY_IS_REQUIRED = {
  message: 'The body of notification is required.', 
  codeApi: 'EA0022', 
  codeUser: null
}

const DEVICE_TYPE_IS_REQUIRED = {
  message: 'The device type is required and must be valid to send notifications.', 
  codeApi: 'EA0023', 
  codeUser: null
}

module.exports = {
  INTERNAL_ERROR,
  DEVICE_IS_REQUIRED,
  TITLE_IS_REQUIRED,
  BODY_IS_REQUIRED,
  DEVICE_TYPE_IS_REQUIRED
}