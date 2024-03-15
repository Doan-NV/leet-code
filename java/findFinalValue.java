package java;
public class findFinalValue {
    public int findFinal(int[] nums, int original) {

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == original) {
                original*=2;
                 return findFinal(nums, original);
            }
        }
        return original;
    }

    public static void main(String[] args) {
        findFinalValue s = new findFinalValue();
        // int[] nums = {5,3,6,1,12};
        int[] nums = {8,19,4,2,15,3};
        int original = 2;
        System.out.println(s.findFinal(nums, original));
    }
}

// this is all leetcode problem i was solved in java