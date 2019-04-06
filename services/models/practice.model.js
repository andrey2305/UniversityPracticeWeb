module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'practices',
    {
      id_practice: { type: DataTypes.INTEGER, primaryKey: true },
      name: { type: DataTypes.STRING },
      address: { type: DataTypes.STRING },
      superior_name: { type: DataTypes.STRING },
      appointment: { type: DataTypes.STRING },
      phone: { type: DataTypes.STRING },
    },
    {
      timestamps: false
    }
  );
};
