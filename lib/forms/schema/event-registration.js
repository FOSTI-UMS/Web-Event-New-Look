/* eslint-disable no-useless-escape */
import Input from '../../../components/Form/Input';
import validatorTypes from '../../../components/Form/utils/validator-types';

export default [
  {
    name: 'nama',
    labelText: 'Nama Kamu',
    Component: Input,
    required: true,
    placeholder: 'John Doe',
    validate: [
      {
        validator: validatorTypes.REQUIRED,
      },
    ],
  },
  {
    name: 'nim',
    labelText: 'Instansi Kamu (Umum/Universitas/Sekolah)',
    Component: Input,
    required: true,
    placeholder: 'Umum',
    validate: [
      {
        validator: validatorTypes.REQUIRED,
      },
    ],
  },
  {
    name: 'email',
    labelText: 'Email Kamu',
    Component: Input,
    required: true,
    placeholder: 'john.doe@email.com',
    validate: [
      {
        validator: validatorTypes.PATTERN,
        pattern: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
        message: 'Format email tidak valid',
      },
    ],
  },
  {
    name: 'hp',
    labelText: 'Nomor Whatsapp',
    helperText: 'Gunakan format nomor dengan awalan 62. Contoh: 6285185981011',
    Component: Input,
    type: 'number',
    required: true,
    placeholder: '6285198591250',
    validate: [
      {
        validator: validatorTypes.PATTERN,
        pattern: /^62[0-9]{9,12}$/,
        message: 'Format nomor tidak valid',
      },
    ],
  },
];
