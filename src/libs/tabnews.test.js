import { AxiosError } from 'axios'
import { TabNews } from './tabnews'

describe('getContents', () => {
  const tabnews = new TabNews()

  test('With valid strategy', async () => {
    const posts = await tabnews.getContents(1, 'relevant')
    expect(posts instanceof Array).toBe(true)
    posts.forEach(post => {
      expect(post instanceof Object).toBe(true)
    })
  })

  test('With invalid strategy', async () => {
    try {
      await tabnews.getContents(1, 'osnofnos')
    } catch (err) {
      expect(err.code).toBe(AxiosError.ERR_BAD_REQUEST)
    }
  })

  test('Pagination', async () => {
    const firstResponse = await tabnews.getContents(1, 'relevant')
    const secondResponse = await tabnews.getContents(2, 'relevant')
    expect(firstResponse !== secondResponse).toBe(true)
  })
})

describe('getPost', () => {
  const tabnews = new TabNews()

  test('Valid', async () => {
    const post = await tabnews.getPost('dheisom', 'instalacao-do-docker-no-alpine')
    expect(post instanceof Object).toBe(true)
  })

  test('Invalid', async () => {
    try {
      await tabnews.getPost('suhfsidfhdu', 'ajdosjdiasjdoqqwonqw')
    } catch (err) {
      expect(err.code).toBe(AxiosError.ERR_BAD_REQUEST)
    }
  })
})
