class Solution(object):
    def plusOne(self, digits):
        i = -1 #index to start from the end
        length = len(digits) 

        def Calculate(arr, i, length):
            if length != 0 and arr[i] != 9:
                arr[i] += 1 
            elif length > 0:
                arr[i] = 0
                length -= 1
                i -= 1
                Calculate(arr, i, length)
            else:
                arr.insert(0, 1) 
        
        Calculate(digits, i, length)
        return digits
        