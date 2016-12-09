export const schema = {
  "type": "object",
  "properties": {
    "recipes": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "name": {
            "type": "string",
            "faker": "commerce.productName"
          },
          "author": {
            "type": "string",
            "faker": "name.findName",
          },
          "ingredients": {
            "type": "array",
            "faker": "helpers.shuffle",
          },
          "directions": {
            "type": "string",
            "faker": "lorem.paragraph",
          }
        },
        required: ['id', 'name', 'author', 'ingredients', 'directions']
      }
    }
  },
  required: ['recipes']
};
