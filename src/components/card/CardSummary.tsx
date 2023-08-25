import { Card, CardContent, Typography, Divider } from "@mui/material";
import { ReactNode } from "react";

interface CardSummaryProps {
  title: string;
  value: string | number;
  footer: ReactNode;
}

const CardSummary: React.FC<CardSummaryProps> = ({ title, value, footer }) => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom color="textPrimary">
            {title}
          </Typography>
          <Divider />
          <Typography variant="h3" color="textPrimary">
            {value}
          </Typography>
          <div>{footer}</div>
        </CardContent>
      </Card>
    </>
  );
};

export { CardSummary };
