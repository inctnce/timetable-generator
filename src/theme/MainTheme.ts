import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = responsiveFontSizes(
	createTheme({
		spacing: 8,
		shape: {
			borderRadius: 8,
		},
		palette: {
			primary: {
				main: "#000000",
			},

			secondary: {
				main: "#F94400",
				contrastText: "#FFFFFF",
			},
		},
		typography: {
			h1: {
				fontWeight: "700",
				fontSize: 52,
			},
			h2: {
				fontWeight: "600",
				fontSize: 32,
			},
			h3: {
				fontWeight: "700",
				fontSize: 30,
			},
			h4: {
				fontWeight: "500",
				fontSize: 22,
			},
			h5: {
				fontWeight: "700",
				fontSize: 18,
			},
			h6: {
				fontWeight: "500",
				fontSize: 18,
			},
			subtitle1: {
				fontWeight: "400",
			},
			subtitle2: {
				fontWeight: "500",
			},
			body1: {
				fontWeight: "400",
			},
			body2: {
				fontWeight: "400",
			},
			button: {
				fontSize: 20,
				fontWeight: "500",
				textTransform: "none",
			},
			caption: {
				fontWeight: "400",
			},
		},
	})
);

theme = responsiveFontSizes(
	createTheme(theme, {
		components: {
			MuiPaper: {
				defaultProps: {
					variant: "outlined",
				},
				styleOverrides: {
					rounded: {
						borderRadius: 8,
						borderColor: theme.palette.primary.main,
					},
				},
			},
			MuiSelect: {
				defaultProps: {
					size: "small",
				},
			},
			MuiTextField: {
				defaultProps: {
					variant: "outlined",
					size: "small",
				},
			},
			MuiOutlinedInput: {
				styleOverrides: {
					root: {
						borderColor: "red",
						borderWidth: 1,
						"& fieldset": {
							borderColor: theme.palette.primary.main,
						},
					},
				},
			},
			MuiButton: {
				defaultProps: {
					size: "small",
					variant: "contained",
					disableElevation: true,
				},
			},
			MuiIconButton: {
				defaultProps: {
					color: "primary",
				},
				styleOverrides: {
					root: {
						// borderRadius: 8,
						"&:hover": {
							borderColor: theme.palette.primary.main,
							// borderColor: theme.palette.primary.contrastText,
						},
					},
				},
			},
		},
	})
);

export default theme;
