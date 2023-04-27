import { memo } from 'react'
import { Pressable, Share, ToastAndroid } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../../colors'
import PropTypes from 'prop-types'
import styles from './styles'

const ShareButton = ({ post }) => {
  const share = () => {
    Share.share({ message: `https://www.tabnews.com.br/${post.owner}/${post.slug}` })
      .catch(() => ToastAndroid.show('Falha ao compartilhar link!', ToastAndroid.SHORT))
  }
  return (
    <Pressable style={styles.main.headerItem} onPress={share}>
      <Ionicons name="md-share-social" size={24} color={colors.primary} />
    </Pressable>
  )
}
ShareButton.propTypes = {
  post: PropTypes.object.isRequired
}

export default memo(ShareButton)
