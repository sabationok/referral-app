import numberWithSpaces from 'utils/numberWithSpaces';

export const selectUserData = state => state.userAuth;
export const selectChildrensInfo = state => state.referral;
export const selectTransactions = state => state.transactions;
export const getActiveBalance = state => {
  let { activeBonuses } = state.transactions.bonuses;
  return numberWithSpaces(activeBonuses);
};
export const getBlockedBalance = state => {
  let { blockedBonuses } = state.transactions.bonuses;
  let newData = {
    total: numberWithSpaces(blockedBonuses.total),
    cashback: numberWithSpaces(blockedBonuses.cashback),
    referral: numberWithSpaces(blockedBonuses.referral),
    extra: numberWithSpaces(blockedBonuses.extra),
  };

  return newData;
};
