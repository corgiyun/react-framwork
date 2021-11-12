import React, { useRef } from 'react'
import { Button, Modal, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { isFunc } from '@/utils'

const Footer = observer(({ store }) => {
  const { loading } = store
  return (
    <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
      <Button disabled={loading} onClick={store.close}>
        取消
      </Button>
      <Button loading={loading} onClick={store.handleOk} type="primary">
        确定
      </Button>
    </Space>
  )
})
function MyModal({ store, children, getProps, ...rest }) {
  const modalStore = store?.$modal || store
  if (!modalStore) {
    console.error('Modal组件必须传store属性，并且是ModalStore的实例')
    return null
  }
  const hasOpened = useRef(false)
  const { visible, openValues } = modalStore
  if (visible) {
    hasOpened.current = true
  }
  const propsByData = hasOpened.current ? getProps?.(openValues) : {}
  return (
    <Modal
      type="primary"
      destroyOnClose
      visible={visible}
      onCancel={modalStore.close}
      footer={<Footer store={modalStore} />}
      {...rest}
      {...propsByData}
    >
      {hasOpened.current &&
        (isFunc(children) ? children(openValues) : children)}
    </Modal>
  )
}
const LmModal = observer(MyModal)

LmModal.confirm = Modal.confirm
LmModal.info = Modal.info
LmModal.success = Modal.success
LmModal.error = Modal.error
LmModal.warning = Modal.warning
export default LmModal
