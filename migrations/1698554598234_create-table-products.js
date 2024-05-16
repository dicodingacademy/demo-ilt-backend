/* eslint-disable camelcase */
exports.up = (pgm) => {
  pgm.createTable('products', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    name: {
      type: 'TEXT',
      notNull: true,
    },
    price: {
      type: 'INTEGER',
      notNull: true,
    },
    category: {
      type: 'TEXT',
      notNull: true,
    },
  });
};
  
exports.down = (pgm) => {
  pgm.dropTable('products');
};
  