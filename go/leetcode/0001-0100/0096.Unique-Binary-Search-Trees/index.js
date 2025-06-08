// 96. Unique Binary Search Trees
/*    
    
    n = 0;     null   
    
    count[0] = 1
    
    
    n = 1;      1       
    
    count[1] = 1 
    
    
    n = 2;    1__       			  __2     
    		      \				      	/                 
    		     count[1]	   	count[1]	
    
    count[2] = 1 + 1 = 2
    
    
    
    n = 3;    1__				         __2__	              __3
    		      \		             /       \			      /		
    		  count[2]		  count[1]    count[1]		count[2]
    
    count[3] = 2 + 1 + 2  = 5
    
    
    
    n = 4;    1__  			  		__2__					           __3__                  
    		      \				     /        \					        /		  \			
    		  count[3]		 count[1]    count[2]		  count[2]   count[1]
    
                 __4				
               /
           count[3]   
    
    count[4] = 5 + 2 + 2 + 5 = 14     
    

And  so on...
*/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  // dp[n]: the number of unique BST for a sequence of length n
  // F(5, 10): the number of unique BST, where the number 5 is the root of BST, and the sequence ranges from 1 to 10
  // F(5, 10) = dp[4]*dp[5]
  // dp[10] = F(1,10)     + F(2,10)     + F(3,10)     + ... + F(10,10)
  //        = dp[0]*dp[9] + dp[1]*dp[8] + dp[2]*dp[7] + ... + dp[9]*dp[0]
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n];
};
