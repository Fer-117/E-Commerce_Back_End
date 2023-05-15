const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
        key: "id",
      },
    },
  },
  {
    hooks: {
      beforeDestroy: async (productTag, options) => {
        // delete all product tags associated with the deleted product or tag
        const deletedProductId = productTag.product_id;
        const deletedTagId = productTag.tag_id;

        if (deletedProductId) {
          await ProductTag.destroy({
            where: {
              product_id: deletedProductId,
            },
            ...options,
          });
        } else if (deletedTagId) {
          await ProductTag.destroy({
            where: {
              tag_id: deletedTagId,
            },
            ...options,
          });
        }
      },
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
