describe('Example 2.2 런던 스타일로 작성된 단위 테스트', function () {
  it('Purchase_succeeds_when_enough_inventory', async function () {
    const store = new Store();
    const mockHasEnoughInventory = jest
      .spyOn(store, 'hasEnoughInventory')
      .mockResolvedValueOnce(true);
    const mockRemoveInventory = jest
      .spyOn(store, 'removeInventory');
    const customer = new Customer();

    const result = customer.purchase(store, Product.Shampoo, 5);

    expect(result).toBeTruthy();
    expect(mockRemoveInventory).toHaveBeenCalledWith([Product.Shampoo, 5]);
  });

  it('purchase_fails_when_not_enough_inventory', async function () {
    // given
    const store = new Store();
    const mockHasEnoughInventory = jest
      .spyOn(store, 'hasEnoughInventory')
      .mockResolvedValueOnce(false);
    const mockRemoveInventory = jest
      .spyOn(store, 'removeInventory');
    const customer = new Customer();

    // when
    const result = customer.purchase(store, Product.Shampoo, 5);

    // then
    expect(result).toBeFalsy();
    expect(mockRemoveInventory).toHaveBeenCalledTimes(0);
  });
});
