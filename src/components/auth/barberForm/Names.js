import React,{useState} from "react";
import {Container,Button,TextField,InputAdornment,IconButton,InputLabel ,FormControl, MenuItem,Select ,makeStyles,Input } from "@material-ui/core";
import {AccountCircleOutlined,Visibility,VisibilityOff,EmailOutlined,LockOutlined, Wc} from '@material-ui/icons';
export const Names = ({ formData, setForm, navigation }) => {
  const { userName, email, password,age,gender,profilePic } = formData;
  const [showPassword, setShowPassword] = useState(false);
  const useStyles= makeStyles(()=>({
     radioGroup:{
       border:"solid  1px",
       borderColor: 'rgba(160,160,255,0.5)',
       borderRadius: '5px',
       display:'flex',
       flexDirection:'row',
       padding:5,
     }
  }))
  const classes=useStyles();
  const handleClickShowPassword = () => {
    setShowPassword( !showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container maxWidth="xs">
      <h3>Barber Names</h3>
      <TextField
        label="User Name"
        name="userName"
        required
        value={userName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircleOutlined />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="E-Mail"
        name="email"
        required
        value={email}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailOutlined />
            </InputAdornment>
          ),
        }}
      />
      <TextField
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            required
            fullWidth
            InputProps={
              {
                startAdornment:(
                  <InputAdornment position="start">
                  <LockOutlined />
                </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
                )
              }
              
            }
          />
       <TextField
        label="Age"
        name="age"
        type="number"
        value={age}
        onChange={e=>e > 50? setForm(50):setForm(e)}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        InputProps={{ inputProps: { min: 18,max:50} }}
      />
       <FormControl variant="outlined" fullWidth   margin="normal">
        <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={gender}
          name="gender"
          onChange={setForm}
          label="Gender"
          fullWidth
        
        >
          <MenuItem value='male'>Male</MenuItem>
          <MenuItem value='female'>Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl margin="normal" fullWidth >
      <InputLabel id="file-upload">Upload Image</InputLabel>
        <Input inputComponent="input" type="file" aria-label="file-upload" placeholder="Upload Image" inputProps={{ accept: 'image/*',"aria-label":'Upload Image' }}/>
      </FormControl>
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        Next
      </Button>
    </Container>
  );
};
