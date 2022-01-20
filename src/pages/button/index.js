import React, { useEffect, useState, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import { message, Button, Form, Input } from 'antd'
import { fetchIndex, login } from '@/api/testApi'

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
    // message.info('success')
    // fetchIndex({ page: 1, pageSize: 10 })
    // login({name: 'liming', password:'123456'})
  }, [])

  const computed = (num) => {
    console.log('computed')
    return num + 1
  }
  const result = useMemo(() => computed(b), [b])
  const onFinish = (values) => {
    // console.log('Success:', values);
    login(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <Button onClick={()=> store.open({test: 111})} type="primary">
        点击{result}
      </Button>

      <Modal title="标题" store={store}>
        内容
      </Modal>
      <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

export default observer(Index)
