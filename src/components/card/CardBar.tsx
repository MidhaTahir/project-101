import { Card, CardContent, Typography, Divider } from "@mui/material";
import { ReactNode } from "react";

interface CardBarProps {
  title: string;
  chart: ReactNode;
}

const CardBar: React.FC<CardBarProps> = ({ title, chart }) => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography color="textPrimary">{title}</Typography>
          <Divider />
          {chart}
        </CardContent>
      </Card>
    </>
  );
};

export { CardBar };
