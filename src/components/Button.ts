import { html } from "htm/preact";

// Button types.
export enum ButtonType {
	Primary = "primary",
	Outline = "outline",
}

// Button sizes.
export enum ButtonSize {
	Small = "small",
	Medium = "medium",
	Large = "large",
}

export const Button = ({
	type = ButtonType.Primary,
	size = ButtonSize.Medium,
	className,
	children,
	onClick,
	disabled,
}: {
	type?: ButtonType;
	size?: ButtonSize;
	className?: string;
	children: ReturnType<typeof html>;
	onClick: () => void;
	disabled?: boolean;
}) => {
	return html`
		<button
			className="c-button c-button--${type} c-button--${size} ${disabled
				? "c-button--disabled"
				: ""} ${className}"
			onClick=${onClick}
			disabled=${disabled}
		>
			${children}
		</button>
	`;
};
