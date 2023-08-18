import { Card, CardContent, Typography, Divider } from "@mui/material";

function CardBar({ title, chart }) {
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
}

export { CardBar };
