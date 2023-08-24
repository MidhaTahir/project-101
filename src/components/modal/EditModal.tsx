import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Formik, Form, Field } from "formik";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { editCustomer } from "../../redux/customerSlice";

const StyledModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 16px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  cursor: pointer;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

const EditModal = ({ open, onClose, row, columnLabelMap }) => {
  const dispatch = useDispatch();
  const editableFields = ["firstName", "lastName", "email", "phone"]; // Add other editable fields
  const editableRow = {};
  editableFields.forEach((field) => {
    editableRow[field] = row[field];
  });

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledModalBox>
        <Typography variant="h6" component="h2">
          Edit Customer
        </Typography>
        <Formik
          initialValues={editableRow}
          onSubmit={(values) => {
            console.log("Submit:", values);
            const dataToSend = {
              id: row.id,
              ...values,
            };
            console.log(dataToSend);
            dispatch(editCustomer(dataToSend));
            onClose();
          }}
        >
          <Form>
            {Object.entries(editableRow).map(([key]) => (
              <div key={key}>
                <StyledLabel>{columnLabelMap[key]}:</StyledLabel>
                <StyledField type="text" name={key} />
              </div>
            ))}
            <StyledButton type="submit">Save</StyledButton>
            <StyledButton type="button" onClick={onClose}>
              Cancel
            </StyledButton>
          </Form>
        </Formik>
      </StyledModalBox>
    </Modal>
  );
};

export default EditModal;
