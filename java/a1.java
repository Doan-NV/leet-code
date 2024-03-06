class Solution {
    public int findFinalValue(int[] nums, int original) {

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == original) {
                original*=2;
                 return findFinalValue(nums, original);
            }
        }
        return original;
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        // int[] nums = {5,3,6,1,12};
        int[] nums = {8,19,4,2,15,3};
        int original = 2;
        System.out.println(s.findFinalValue(nums, original));
    }
}