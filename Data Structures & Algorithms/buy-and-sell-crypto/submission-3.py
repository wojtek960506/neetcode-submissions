class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        i_buy = 0
        i_sell = 1

        max_profit = 0

        while i_sell < len(prices):

            max_profit = max(max_profit, prices[i_sell] - prices[i_buy])

            if prices[i_sell] < prices[i_buy]:
                i_buy += 1
            elif prices[i_sell] == prices[i_buy]:
                i_buy = i_sell
                i_sell +=1
            else:
                i_sell += 1

        return max_profit
        