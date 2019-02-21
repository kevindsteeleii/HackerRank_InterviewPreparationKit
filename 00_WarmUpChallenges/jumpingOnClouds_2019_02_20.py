""" 
Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided. For example, c = [0,1,0,0,0,1,0] indexed from 0...6. The number on each cloud is its index in the list so she must avoid the clouds at indexes 1 and 5.  She could follow the following two paths: 0->2->4->6 or 0->2->3->4->6. he first path takes 3 jumps while the second takes 4.

Function Description

Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

jumpingOnClouds has the following parameter(s):
    c: an array of binary integers

Input Format
The first line contains an integer (n),the total number of clouds. The second line contains (n) space-separated binary integers describing clouds ( c[i] ) where 0 <= i <= n.

Constraints
    *   2 <= n <= 100
    *   c[i] /in {0,1}
    *   c[0] = c[n-1] = 0
"""

def jumpingOnClouds(c):
    i = 0 
    jumps = 0
    while i < len(c)-1:
        # print(jumps)
        try:
            if c[i+2] == 0 or c[i+1] == 0:
                i = i + 2 if c[i+2] == 0 else i + 1
                jumps += 1
        except:
            jumps += 1
            break
    return jumps



if __name__ == '__main__':
    print(jumpingOnClouds([0,1,0,1,0]))