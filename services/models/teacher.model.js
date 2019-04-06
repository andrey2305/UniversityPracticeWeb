module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'teachers',
    {
      id_teach: { type: DataTypes.INTEGER, primaryKey: true },
      name: { type: DataTypes.STRING }
    },
    {
      timestamps: false
    }
  );
};
