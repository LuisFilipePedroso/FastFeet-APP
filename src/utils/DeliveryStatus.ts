interface IParams {
  startDate: Date | undefined;
  endDate: Date | undefined;
}

// eslint-disable-next-line consistent-return
export default function({ startDate = null, endDate = null }: IParams) {
  if (startDate !== null && endDate !== null) {
    return 'DONE';
  }

  if (startDate === null) {
    return 'PENDING';
  }

  if (startDate !== null) {
    return 'TAKE';
  }
}
