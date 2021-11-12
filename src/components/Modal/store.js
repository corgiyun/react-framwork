import { observable, action, makeObservable, runInAction } from 'mobx'
import { overrideStore, resetStore, isEvent, isPromise } from '@/utils'
export default class ModalStore {
  constructor(overrides) {
    overrideStore(this, overrides)
    makeObservable(this, {
      visible: observable,
      loading: observable,
      open: action,
      onOpen: action,
      close: action,
      handleOk: action,
      onOk: action,
    })
  }

  visible = false

  openValues

  onOpen = () => {
    return this.openValues
  }

  open = async (data) => {
    if (this.onOpen) {
      const _data = isEvent(data) ? undefined : data
      this.openValues = _data
      if (this.onOpen) {
        this.openValues = await this.onOpen(_data)
      }
    }
    runInAction(() => {
      this.visible = true
    })
  }

  close = () => {
    this.visible = false
  }

  loading = false

  handleOk = async () => {
    const back = this.onOk(this.openValues)
    if (isPromise(back)) {
      this.loading = true
      back.finally(() => {
        runInAction(() => {
          this.loading = false
        })
      })
    }
  }

  onOk = () => {
    this.close()
    return null
  }

  resetStore = () => {
    resetStore(this, ModalStore)
  }
}
