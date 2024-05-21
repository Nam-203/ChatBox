import { InputBase } from "@mui/material";

import { styled } from "@mui/material/styles";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`, // Đã thêm dấu đóng ngoặc vào hàm calc()
    width: "100%",
  },
}));
export default StyledInputBase;
