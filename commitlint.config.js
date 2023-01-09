/*
 * @Author: 王云飞
 * @Date: 2023-01-09 22:26:12
 * @LastEditTime: 2023-01-09 22:26:18
 * @LastEditors: 王云飞
 * @Description:
 *
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  roles: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build'
      ]
    ],
    'subject-case': [0]
  }
}
