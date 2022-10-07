import { Box, Stack, Typography } from "@mui/material";

import { Container } from "@mui/system";
import { ReactComponent as IconMenu1 } from "../../assets/logo/apple.svg";
import { ReactComponent as IconMenu2 } from "../../assets/logo/discover.svg";
import { ReactComponent as IconMenu3 } from "../../assets/logo/gpay.svg";
import { ReactComponent as IconMenu4 } from "../../assets/logo/master.svg";
import { ReactComponent as IconMenu5 } from "../../assets/logo/visa.svg";
import React from "react";

const FooterBottom = () => {
  return (
    <Box sx={{ bgcolor: "#f0a945" }}>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1" color="#fff">
              © 2022 - Khan Anupam Shafi | All rights reserved
            </Typography>
          </Box>
          <Box sx={{ p: 2 }}>
            <IconMenu1 />
            <IconMenu2 />
            <IconMenu3 />
            <IconMenu4 />
            <IconMenu5 />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterBottom;
