import React from 'react'
import {ImSpinner3} from 'react-icons/im'
import s from '../components/Loader.module.css'


/* Spinner importado desde react icons */
export default function Loader() {
  return (
    <div className={s.loader}>
        <div className={s.loaderCenter}>
        <ImSpinner3 className={s.loading} size={60}/>
        </div>
    </div>
  )
}
