import { AxiosError } from 'axios'
import { TabNews } from './tabnews'

const tabnews = new TabNews()
class NoErrorThrownError extends Error { }
const getError = async (call) => {
  try {
    await call()
    throw new NoErrorThrownError()
  } catch (err) {
    return err
  }
}

jest.setTimeout(10000)

describe('getContents', () => {
  test('With valid strategy', async () => {
    const posts = await tabnews.getContents(1, 'relevant')
    expect(posts instanceof Array).toBe(true)
    posts.forEach(post => {
      expect(post instanceof Object).toBe(true)
    })
  })

  test('With invalid strategy', async () => {
    const error = await getError(async () => await tabnews.getContents(1, 'osnofnos'))
    expect(error).not.toBe(NoErrorThrownError)
    expect(error).toHaveProperty('code', AxiosError.ERR_BAD_REQUEST)
  })

  test('Pagination', async () => {
    const firstResponse = await tabnews.getContents(1, 'relevant')
    const secondResponse = await tabnews.getContents(2, 'relevant')
    expect(firstResponse !== secondResponse).toBe(true)
  })
})

describe('getPost', () => {
  test('Existent', async () => {
    const post = await tabnews.getPost('dheison0', 'instalacao-do-docker-no-alpine')
    expect(post instanceof Object).toBe(true)
  })

  test('Not existent', async () => {
    const error = await getError(async () => await tabnews.getPost('abc', 'b'))
    expect(error).not.toBe(NoErrorThrownError)
    expect(error).toHaveProperty('code', AxiosError.ERR_BAD_REQUEST)
  })
})

describe('getComments', () => {
  test('Post with comments', async () => {
    const comments = await tabnews.getComments('dheison0', 'decoradores-em-python')
    expect(comments).not.toBe([])
  })

  test('Post without comments', async () => {
    const comments = await tabnews.getComments('tiagolofi', '654b6026-07c4-4bd1-af24-298f2ebc9802')
    expect(comments.length).toBe(0)
  })

  test('Post not existent', async () => {
    const error = await getError(async () => await tabnews.getComments('abc', 'b'))
    expect(error).not.toBe(NoErrorThrownError)
    expect(error).toHaveProperty('code', AxiosError.ERR_BAD_REQUEST)
  })
})
