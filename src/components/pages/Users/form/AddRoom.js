import { CNButton } from '@Components/shared/CNButton/CNButton';
import { CNCheckBox } from '@Components/shared/CNCheckBox/CNCheckBox';
import { CNSelect } from '@Components/shared/CNSelect/CNSelect';
import { CNTextField } from '@Components/shared/CNTextField/CNTextField';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  FormControl,
  FormHelperText,
  makeStyles,
  TextareaAutosize,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';
import './styles.css';

const useStyled = makeStyles((theme) => ({
  formControl: {
    marginBottom: '20px',
    '& > label > span': {
      color: 'red',
    },
  },
  textArial: {
    padding: '6px 20px',
    fontSize: 18,
    fontWeight: 500,
  },
  selectStyles: {
    marginBottom: '20px',
    '& > label > span': {
      color: 'red',
    },
  },
  boxRow: {
    '& > *': {
      width: 'calc(100% / 3 - 20px)',
    },
  },
  helperTextStyles: {
    color: 'red',
    position: 'absolute',
    bottom: '-18px',
  },
  buttonStyles: {},
}));

const Wrapper = styled.div`
  background-color: #f7f7f7;
  width: 100vw;
  height: auto;
  margin-top: 100px;
  font-family: 'Nunito', Arial, sans-serif;
`;
const Container = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1170px;
  overflow: hidden;
  position: relative;
  padding: 15px;
`;
const Title = styled.h1`
  font-weight: 700;
  color: #484848;
  font-size: 30px;
  margin: 28px 0;
`;
const TitleBox = styled.h5`
  font-weight: 700;
  color: #484848;
  font-size: 20px;
  margin-bottom: 20px;
`;
const Content = styled.div`
  width: 100%;
`;
const Box = styled.div`
  background-color: #fff;
  padding: 30px;
  margin-bottom: 30px;
  border-radius: 6px;
  border: 1px solid #ebebeb;
`;
const BoxRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const Label = styled.label`
  color: #222;
  font-weight: '600';
`;
const Linear = styled.div`
  width: 100%;
  border: 1px solid #ebebeb;
  margin: 25px 0;
`;

function AddRoom(props) {
  const classes = useStyled();

  const [checkboxData, setCheckboxState] = useState([
    {
      label: 'Khép kín',
      value: 'kk',
      id: 1,
      isChecked: false,
    },
    {
      label: 'WiFi',
      value: 'wifi',
      id: 2,
      isChecked: false,
    },
    {
      label: 'Điều hòa',
      value: 'dh',
      id: 3,
      isChecked: false,
    },
    {
      label: 'Nóng lạnh',
      value: 'nl',
      id: 4,
      isChecked: false,
    },
    {
      label: 'Tủ quần áo',
      value: 'tqa',
      id: 5,
      isChecked: false,
    },
    {
      label: 'Giường',
      value: 'g',
      id: 6,
      isChecked: false,
    },
  ]);

  const options = {
    ward: [
      { value: 'p1', label: 'Phường 1' },
      { value: 'p2', label: 'Phường 2' },
      { value: 'p3', label: 'Phường 3' },
    ],
    district: [
      { value: 'd1', label: 'Quận 1' },
      { value: 'd2', label: 'Quận 2' },
      { value: 'd3', label: 'Quận 3' },
    ],
    city: [{ value: 'hn', label: 'Hà Nội' }],
  };
  const defaultValues = {
    name: '',
    capacity: '',
    acreage: '',
    overview: '',
    house_number: '',
    corner: '',
    street: '',
    ward: null,
    district: null,
    city: null,
    price: '',
    price_electric: '',
    price_water: '',
  };

  const schema = yup.object().shape({
    name: yup.string().required('Vui lòng nhập tên phòng'),
    capacity: yup
      .string()
      .required('Vui lòng nhập sức chứa')
      .matches(/^[0-9]+$/, 'Sức chứa không hợp lệ'),
    acreage: yup
      .string()
      .required('Vui lòng nhập diện tích phòng')
      .matches(/^[0-9]+$/, 'Sức chứa không hợp lệ'),
    house_number: yup
      .string()
      .required('Vui lòng số nhà')
      .matches(/^[0-9]+$/, 'Số nhà không hợp lệ'),
    corner: yup
      .string()
      .required('Vui lòng nhập ngõ ngách')
      .matches(/^[0-9|/]+$/, 'Ngõ ngách không hợp lệ'),
    street: yup.string().required('Vui lòng nhập tên đường'),
    ward: yup
      .string()
      .required('Vui lòng chọn phường')
      .nullable('Vui lòng chọn phường'),
    district: yup
      .string()
      .required('Vui lòng chọn quận')
      .nullable('Vui lòng chọn quận'),
    city: yup
      .string()
      .required('Vui lòng chọn thành phố')
      .nullable('Vui lòng chọn thành phố'),
    price: yup
      .string()
      .required('Vui lòng nhập giá phòng')
      .matches(/^[0-9]+$/, 'Giá phòng không hợp lệ'),
    price_electric: yup
      .string()
      .required('Vui lòng nhập giá điện')
      .matches(/^[0-9]+$/, 'Giá điện không hợp lệ'),
    price_water: yup
      .string()
      .required('Vui lòng nhập giá nước')
      .matches(/^[0-9]+$/, 'Giá nước không hợp lệ'),
  });
  const { control, handleSubmit, formState } = useForm({
    mode: 'onSubmit',
    defaultValues,
    resolver: yupResolver(schema),
  });
  const handleAddSubmit = (values) => {
    console.log(values);
  };
  const handleChangeImg = (element) => {
    console.log('avs');
  };
  return (
    <Wrapper>
      <Container>
        <Title>Add Room</Title>
        <Content>
          <form onSubmit={handleSubmit(handleAddSubmit)}>
            <Box>
              <TitleBox>Thông tin cơ bản</TitleBox>
              <Controller
                name="name"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <FormControl className={classes.formControl} fullWidth>
                    <Label htmlFor="form-add-name">
                      Tên phòng trọ<span> *</span>
                    </Label>
                    <CNTextField
                      id="form-add-name"
                      fullWidth
                      type="text"
                      error={!!formState.errors['name']}
                      value={value ? value : ''}
                      inputChange={(e) => {
                        onChange(e);
                      }}
                    />
                    <FormHelperText className={classes.helperTextStyles}>
                      {formState.errors['name']?.message}
                    </FormHelperText>
                  </FormControl>
                )}
              />
              <Controller
                name="capacity"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <FormControl className={classes.formControl} fullWidth>
                    <Label htmlFor="form-add-capacity">
                      {`Sức chứa(người)`}
                      <span> *</span>
                    </Label>
                    <CNTextField
                      id="form-add-capacity"
                      fullWidth
                      type="text"
                      error={!!formState.errors['capacity']}
                      value={value ? value : ''}
                      inputChange={(e) => {
                        onChange(e);
                      }}
                    />
                    <FormHelperText className={classes.helperTextStyles}>
                      {formState.errors['capacity']?.message}
                    </FormHelperText>
                  </FormControl>
                )}
              />
              <Controller
                name="acreage"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <FormControl className={classes.formControl} fullWidth>
                    <Label htmlFor="form-add-acreage">
                      {'Diện tích(\u33A1)'}
                      <span> *</span>
                    </Label>
                    <CNTextField
                      id="form-add-acreage"
                      fullWidth
                      type="text"
                      error={!!formState.errors['acreage']}
                      value={value ? value : ''}
                      inputChange={(e) => {
                        onChange(e);
                      }}
                    />
                    <FormHelperText className={classes.helperTextStyles}>
                      {formState.errors['acreage']?.message}
                    </FormHelperText>
                  </FormControl>
                )}
              />
              <Controller
                name="image"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <FormControl className={classes.formControl} fullWidth>
                    <Label htmlFor="form-add-image">
                      Ảnh<span> *</span>
                    </Label>
                    <input
                      id="dd"
                      type="file"
                      accept="image/png, image/jpeg image/jpg"
                      onChange={(e) => {
                        console.log(e);
                        onChange(e);
                      }}
                      multiple
                      name="upload_file"
                    />
                  </FormControl>
                )}
              />
              <Controller
                name="overview"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <FormControl className={classes.formControl} fullWidth>
                    <Label htmlFor="form-add-overview">Overview</Label>
                    <TextareaAutosize
                      id="form-add-overview"
                      rowsMin={8}
                      rowsMax={10}
                      value={value ? value : ''}
                      onChange={onChange}
                      className={classes.textArial}
                    />
                  </FormControl>
                )}
              />
            </Box>
            <Box>
              <TitleBox>Địa chỉ</TitleBox>
              <BoxRow className={classes.boxRow}>
                <Controller
                  name="house_number"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <FormControl className={classes.formControl}>
                      <Label htmlFor="form-add-house-number">
                        Số nhà<span> *</span>
                      </Label>
                      <CNTextField
                        id="form-add-house-number"
                        type="text"
                        error={!!formState.errors['house_number']}
                        fullWidth
                        value={value ? value : ''}
                        inputChange={(e) => {
                          onChange(e);
                        }}
                      />
                      <FormHelperText className={classes.helperTextStyles}>
                        {formState.errors['house_number']?.message}
                      </FormHelperText>
                    </FormControl>
                  )}
                />
                <Controller
                  name="corner"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <FormControl className={classes.formControl}>
                      <Label htmlFor="form-add-corner">
                        Ngõ ngách<span> *</span>
                      </Label>
                      <CNTextField
                        id="form-add-corner"
                        type="text"
                        error={!!formState.errors['corner']}
                        fullWidth
                        value={value ? value : ''}
                        inputChange={(e) => {
                          onChange(e);
                        }}
                      />
                      <FormHelperText className={classes.helperTextStyles}>
                        {formState.errors['corner']?.message}
                      </FormHelperText>
                    </FormControl>
                  )}
                />
                <Controller
                  name="street"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <FormControl className={classes.formControl}>
                      <Label htmlFor="form-add-street">
                        Đường<span> *</span>
                      </Label>
                      <CNTextField
                        id="form-add-street"
                        type="text"
                        error={!!formState.errors['street']}
                        fullWidth
                        value={value ? value : ''}
                        inputChange={(e) => {
                          onChange(e);
                        }}
                      />
                      <FormHelperText className={classes.helperTextStyles}>
                        {formState.errors['street']?.message}
                      </FormHelperText>
                    </FormControl>
                  )}
                />
                <Controller
                  name="ward"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <FormControl className={classes.formControl}>
                      <Label htmlFor="form-add-ward">
                        Phường<span> *</span>
                      </Label>
                      <CNSelect
                        name={name}
                        options={options[name]}
                        fullWidth
                        placeholder="Chọn phường"
                        width={'100%'}
                        onChange={(e) => {
                          console.log(e);
                          onChange(e ? e.value : null);
                        }}
                      />
                      <FormHelperText className={classes.helperTextStyles}>
                        {formState.errors['ward']?.message}
                      </FormHelperText>
                    </FormControl>
                  )}
                />
                <Controller
                  name="district"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <FormControl className={classes.selectStyles}>
                      <Label>
                        Quận<span> *</span>
                      </Label>
                      <CNSelect
                        name={name}
                        options={options[name]}
                        fullWidth
                        placeholder="Chọn quận"
                        width={'100%'}
                        onChange={(e) => {
                          console.log(e);
                          onChange(e ? e.value : null);
                        }}
                      />
                      <FormHelperText className={classes.helperTextStyles}>
                        {formState.errors['district']?.message}
                      </FormHelperText>
                    </FormControl>
                  )}
                />
                <Controller
                  name="city"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <FormControl className={classes.formControl}>
                      <Label htmlFor="form-add-acreage">
                        Thành phố<span> *</span>
                      </Label>
                      <CNSelect
                        name={name}
                        options={options[name]}
                        fullWidth
                        placeholder="Chọn thành phố"
                        width={'100%'}
                        onChange={(e) => {
                          console.log(e);
                          onChange(e ? e.value : null);
                        }}
                      />
                      <FormHelperText className={classes.helperTextStyles}>
                        {formState.errors['city']?.message}
                      </FormHelperText>
                    </FormControl>
                  )}
                />
              </BoxRow>
            </Box>
            <Box>
              <TitleBox>Giá</TitleBox>
              <BoxRow className={classes.boxRow}>
                <Controller
                  name="price"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <FormControl className={classes.formControl}>
                      <Label htmlFor="form-add-house-number">
                        {`Giá thuê nhà(theo tháng)`}
                        <span> *</span>
                      </Label>
                      <CNTextField
                        id="form-add-house-number"
                        type="text"
                        error={!!formState.errors['price']}
                        fullWidth
                        value={value ? value : ''}
                        inputChange={(e) => {
                          onChange(e);
                        }}
                      />
                      <FormHelperText className={classes.helperTextStyles}>
                        {formState.errors['price']?.message}
                      </FormHelperText>
                    </FormControl>
                  )}
                />
                <Controller
                  name="price_electric"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <FormControl className={classes.formControl}>
                      <Label htmlFor="price-electric">
                        {`Giá điện(kWh)`}
                        <span> *</span>
                      </Label>
                      <CNTextField
                        id="price-electric"
                        type="text"
                        error={!!formState.errors['price_electric']}
                        fullWidth
                        value={value ? value : ''}
                        inputChange={(e) => {
                          onChange(e);
                        }}
                      />
                      <FormHelperText className={classes.helperTextStyles}>
                        {formState.errors['price_electric']?.message}
                      </FormHelperText>
                    </FormControl>
                  )}
                />
                <Controller
                  name="price_water"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <FormControl className={classes.formControl}>
                      <Label htmlFor="price-water">
                        {'Giá nước sinh hoạt'}
                        <span> *</span>
                      </Label>
                      <CNTextField
                        id="price-water"
                        type="text"
                        error={!!formState.errors['price_water']}
                        fullWidth
                        value={value ? value : ''}
                        inputChange={(e) => {
                          onChange(e);
                        }}
                      />
                      <FormHelperText className={classes.helperTextStyles}>
                        {formState.errors['price_water']?.message}
                      </FormHelperText>
                    </FormControl>
                  )}
                />
              </BoxRow>
            </Box>
            <Box>
              <TitleBox>Tiện ích</TitleBox>
              <BoxRow className={classes.boxRow}>
                {checkboxData.map((item) => (
                  <CNCheckBox
                    label={item.label}
                    data={item}
                    key={item.id}
                    checkBoxState={checkboxData}
                    setCheckBoxState={setCheckboxState}
                  />
                ))}
              </BoxRow>
            </Box>
            <Linear />
            <CNButton
              buttonType="main"
              type="submit"
              className={classes.buttonStyles}
            >
              Lưu
            </CNButton>
          </form>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default AddRoom;
