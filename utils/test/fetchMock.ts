export const fetchMock = jest.fn();

export const givenResponse = (response: any) => {
  fetchMock.mockResolvedValue({
    json: () => Promise.resolve(response),
  })
}
