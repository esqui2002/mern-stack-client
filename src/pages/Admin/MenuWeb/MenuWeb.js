import React, { useEffect, useState } from 'react'
import { getMenuApi } from '../../../api/menu'
import MenuWebList from '../../../components/Admin/MenuWeb/MenuWebList/MenuWebList'

export default function MenuWeb() {
  const [menu, setMenu] = useState([])
  const [reloadMenuWeb, setReloadMenuWeb] = useState(false)

  useEffect(() => {
    getMenuApi().then((res) => {
      setMenu(res.menu)
    })
    setReloadMenuWeb(false)
  }, [reloadMenuWeb])

  return (
    <div className="menu-web">
      <MenuWebList menu={menu} setReloadMenuWeb={setReloadMenuWeb} />
    </div>
  )
}
