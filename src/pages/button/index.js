import React, { useEffect, useState, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import { message, Button } from 'antd'
import { fetchList } from '@/api/testApi'

// import Button from '../../components/Button'
import Modal from '@/components/Modal'
import ModalStore from '@/components/Modal/store'

function Index() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(1)

  const store = new ModalStore({
    onOpen: async (data) => {
      console.log('onOpen', data)
      return {
        name: '1111',
      }
    },
    onOk: (data) => {
      console.log(data)
      store.close()
    },
  })

  useEffect(() => {
    message.info('success')
    fetchList({ page: 1, size: 10 })
  }, [])

  const computed = (num) => {
    console.log('computed')
    return num + 1
  }
  const result = useMemo(() => computed(b), [b])

  return (
    <div>
      <Button onClick={store.open} type="primary">
        点击{result}
      </Button>

      <Modal title="标题" store={store}>
        内容
      </Modal>
    </div>
  )
}

export default observer(Index)
