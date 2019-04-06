module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'students',
    {
      id_student: { type: DataTypes.INTEGER, primaryKey: true },
      name: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING },
      phone: { type: DataTypes.STRING },
      id_practice: { type: DataTypes.INTEGER },
      group_number: { type: DataTypes.INTEGER }
    },
    {
      timestamps: false,
    }
  );
};