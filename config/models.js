module.exports.models = {
  // schema: true,
  migrate: 'alter',
  attributes: {
    createdAt: {type: 'number', autoCreatedAt: true,},
    updatedAt: {type: 'number', autoUpdatedAt: true,},
    id: {type: 'number', autoIncrement: true,}
  },
  dataEncryptionKeys: {
    default: 'FiTth1HzdWdK4mTPaJIJVSbZQMzD902xhtA5c1cJz3Y='
  },
  cascadeOnDestroy: true
};
