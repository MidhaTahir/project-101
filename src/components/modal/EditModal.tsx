// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Formik, Form, Field } from "formik";
import styled from "@emotion/styled";
import { Box, Theme } from "@mui/material";
import { EditCustomerDTO, editCustomer } from "../../redux/customerSlice";
import theme from "../../theme";
import { Customer } from "../../global/types/customerTypes";
import { useAppDispatch } from "../../redux/store";

const StyledModalBox = styled(Box)<{ theme: Theme }>`
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

const StyledButton = styled.button<{ theme: Theme }>`
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

interface EditModalProps {
  open: boolean;
  onClose: () => void;
  row: Customer;
  // In TypeScript, Record is a utility type that allows you to define an object type with specific key-value pairs.
  columnLabelMap: Record<string, string>; // Assuming columnLabelMap is a mapping of column names to labels
}

const EditModal: React.FC<EditModalProps> = ({
  open,
  onClose,
  row,
  columnLabelMap,
}) => {
  const dispatch = useAppDispatch();
  const editableFields = ["firstName", "lastName", "email", "phone"]; // Add other editable fields
  const editableRow = {} as Record<string, unknown>;
  editableFields.forEach((field) => {
    editableRow[field] = row[field as keyof Customer];
  });

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledModalBox theme={theme}>
        <Typography variant="h6" component="h2">
          Edit Customer
        </Typography>
        <Formik
          initialValues={editableRow}
          onSubmit={(values) => {
            const dataToSend: EditCustomerDTO = {
              id: row.id,
              ...values,
            };
            console.log("Submit:", dataToSend);
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
            <StyledButton theme={theme} type="submit">
              Save
            </StyledButton>
            <StyledButton theme={theme} type="button" onClick={onClose}>
              Cancel
            </StyledButton>
          </Form>
        </Formik>
      </StyledModalBox>
    </Modal>
  );
};

export default EditModal;
