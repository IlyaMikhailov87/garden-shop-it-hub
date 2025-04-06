import s from './Form.module.scss';
import Button from '../Button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../../..';
import { toast } from 'react-toastify';

function Form({
  theme,
  titleForBtn,
  themeForBtn,
  sizeForBtn,
  type,
  setModalState,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const types = {
    cart: useSelector((store) => store.cart.cart)
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    const newData = {
      ...data,
      orderedProducts: types[type]
    };

    setIsSubmitting(true);

    axios
      .post(BASE_URL + '/order/send', newData)
      .then((res) => {
        reset();
        setModalState(true);
      })
      .catch((error) => {
        setIsSubmitting(false);
        toast.error('Something went wrong. Try again later', {
          position: 'bottom-right',
        });
        console.log(error);
      });
  };

  const inputName = {
    ...register('firstname', {
      required: 'Имя обязательно к заполнению.',
      minLength: {
        value: 3,
        message: 'Имя должно состоять из не менее 3 букв.',
      },
      maxLength: {
        value: 10,
        message: 'Имя не должно превышать больше 10 символов.',
      },
    }),
  };
  const inputPhoneNumber = {
    ...register('phoneNumber', {
      required: 'Номер телефона обязателен к заполнению.',
      pattern: {
        value: /^(\+7|8)\s?\(?(\d{3})\)?\s?\d{3}[- ]?\d{2}[- ]?\d{2}$/,
        message: 'Номер телефона должен быть в формате +7 XXX XXX-XX-XX.',
      },
    }),
  };
  const inputEmail = {
    ...register('email', {
      required: 'Почта обязательна к заполнению.',
      pattern: {
        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        message: 'Указан неверный формат почты.',
      },
    }),
  };

  return (
    <form className={`${s.form} ${s[theme]}`} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.inp_wrap}>
        <input type={'text'} placeholder={'Name'} {...inputName} />
        {errors.firstname && (
          <p className={s.inp_error}>{errors.firstname.message}</p>
        )}
      </div>
      <div className={s.inp_wrap}>
        <InputMask
          mask={'+7 999 999-99-99'}
          placeholder={'Phone number'}
          {...inputPhoneNumber}
        />
        {errors.phoneNumber && (
          <p className={s.inp_error}>{errors.phoneNumber.message}</p>
        )}
      </div>
      <div className={s.inp_wrap}>
        <input type={'email'} placeholder={'Email'} {...inputEmail} />
        {errors.email && <p className={s.inp_error}>{errors.email.message}</p>}
      </div>
      <Button
        title={type === 'discountBanner' ? (isSubmitting ? 'Request Submitted' : titleForBtn) : (isSubmitting ? 'The Ordered Is Placed' : titleForBtn)}
        disabled={isSubmitting}
        theme={isSubmitting ? 'white' : themeForBtn}
        size={sizeForBtn}
        type={'submit'}
      />
    </form>
  );
}

export default Form;
