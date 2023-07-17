import { problems } from './../../utils/problems/index'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '@/utils/connectToDatabase'
import { ProblemType, Problem } from '@/schemas/Problem'
import assert from 'assert'

type Data = {
  name: string
  problems: ProblemType[]
  problem: ProblemType
}

export const jumpGameHandler = `(fn: any) => {
  try {
    const tests = [
      [2, 3, 1, 1, 4],
      [3, 2, 1, 0, 4],
      [2, 0, 0],
      [2, 5, 0, 0],
    ]
    const answers = [true, false, true, true]
    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i])
      assert.equal(result, answers[i])
    }
    return true
  } catch (error: any) {
    console.log('Error from jumpGameHandler: ', error)
    throw new Error(error)
  }
}`

const starterCodeJumpGameJS = `function canJump(nums) {
  // Write your code here
  console.log('hello', nums)
};`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  connectToDatabase()
  const problems = await Problem.find({})
  await Problem.deleteMany({})
  const problem = new Problem()
  ;(problem.id = 'jump-game'),
    (problem.title = '3. Jump Game'),
    (problem.problemStatement = `<p class='mt-3'>
    You are given an integer array <code>nums</code>. You are initially positioned at the <strong>first index</strong>
    and each element in the array represents your maximum jump length at that position.
  </p>
    <p class='mt-3'>
    Return <code>true</code> if you can reach the last index, or <code>false</code> otherwise.
    </p>
  `),
    (problem.examples = [
      {
        id: 1,
        inputText: `nums = [2,3,1,1,4]`,
        outputText: `true`,
        explanation:
          'Jump 1 step from index 0 to 1, then 3 steps to the last index.',
      },
      {
        id: 2,
        inputText: `nums = [3,2,1,0,4]`,
        outputText: `false`,
        explanation:
          'You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.',
      },
    ])
  problem.constraints = `<li class='mt-2'><code>1 <= nums.length <= 10^4</code></li>
  <li class='mt-2'><code>0 <= nums[i] <= 10^5</code></li>`
  problem.starterCode = starterCodeJumpGameJS
  problem.handlerFunction = jumpGameHandler
  problem.order = 3
  problem.category = 'Array'
  problem.save()
  // let func = new Function(starterCodeJumpGameJS)
  // console.log(func, func([1,2,3]))

  const starterCodeJumpGameJS2 = `function canJump(nums) {
    // Write your code here
    console.log('hello', nums);
  };`
  
  let func = new Function(`nums`, `
  function canJump(nums) {
    // Write your code here
    console.log('hello', nums);
  }
  canJump(nums);
`);

func([1,2,3]);

  res.status(200).json({ name: 'John Doe', problems, problem })
}
