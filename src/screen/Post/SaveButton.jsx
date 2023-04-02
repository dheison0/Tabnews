import { memo, useState } from 'react'
import { Pressable, ToastAndroid } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../colors'
import { addBookmark, isBookmarked, removeBookmark } from '../../libs/storage'
import PropTypes from 'prop-types'

const SaveButton = ({ post }) => {
  const [marked, setMarked] = useState(false)
  const check = () => isBookmarked(post).then((marked) => setMarked(marked))
  const onPress = () => {
    const notify = (message) => {
      ToastAndroid.show(message, ToastAndroid.SHORT)
      check()
    }
    if (marked) {
      removeBookmark(post)
        .then(() => notify('Removido dos salvos!'))
        .catch(() => notify('Falha ao remover dos salvos!'))
    } else {
      addBookmark(post)
        .then(() => notify('Salvo com sucesso!'))
        .catch(() => notify('Falha ao salvar!'))
    }
  }
  check()
  return (
    <Pressable
      onPress={onPress}
      style={{ paddingRight: 8, alignItems: 'center' }}
    >
      <Ionicons
        name={marked ? 'md-bookmark' : 'md-bookmark-outline'}
        color={theme.colors.primary}
        size={24}
      />
    </Pressable>
  )
}
SaveButton.propTypes = {
  post: PropTypes.object.isRequired
}

export default SaveButton
