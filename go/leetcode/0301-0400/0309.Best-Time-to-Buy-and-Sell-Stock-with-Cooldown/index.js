// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solutions/75928/share-my-dp-solution-by-state-machine-thinking/

/**
 * @param {number[]} prices
 * @return {number}
 */
// state should be understood as the consequence of our previous actions, and what action we can do at current state.
//stateA:
// [Consequence] State not immediate after selling; Doesn't have any stock;
// [Action can take] Buy a new stock / Continue to take a rest

// stateB:
// [Consequence] State with stock in hand;
// [Action can take] Sell a stock / Continue to take a rest

// stateC:
// [Consequence] State immediate after selling; Doesn't have any stock (since just sell one to enter this state)
// [Action can take] Enters next state by taking a rest (since stateC is only for state immediate after selling, we cannot stay here.)
var maxProfit = function (prices) {
  let stateA = [];
  let stateB = [];
  let stateC = [];

  stateA[0] = 0;
  stateB[0] = -prices[0];
  stateC[0] = -Infinity;

  for (let i = 1; i < prices.length; i++) {
    stateA[i] = Math.max(stateA[i - 1], stateC[i - 1]);
    stateB[i] = Math.max(stateB[i - 1], stateA[i - 1] - prices[i]);
    stateC[i] = stateB[i - 1] + prices[i];
  }

  return Math.max(stateA[prices.length - 1], stateC[prices.length - 1]);
};
