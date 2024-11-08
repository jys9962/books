describe('Example 2.1 고전파 스타일로 작성된 테스트', function () {
  it('Purchase_succeeds_when_enough_inventory', function () {
    const store = new Store();
    store.addInventory(Product.Shampoo, 10);
    const customer = new Customer();

    const success = customer.purchase(store, Product.Shampoo, 5);

    expect(success).toBeTruthy();
    expect(store.getInventory(Product.Shampoo)).toBe(5);
  });

  it('Purchase_fails_when_not_enough_inventory', async function () {
    const store = new Store();
    store.addInventory(Product.Shampoo, 10);
    const customer = new Customer();

    const success = customer.purchase(store, Product.Shampoo, 15);

    expect(success).toBeFalsy();
    expect(store.getInventory(Product.Shampoo)).toBe(10);
  });
});
