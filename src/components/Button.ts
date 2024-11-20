import { html } from "htm/preact";
import { useRef } from "preact/hooks";

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
	className = "",
	children,
	onClick,
	onFileUpload,
	disabled,
}: {
	type?: ButtonType;
	size?: ButtonSize;
	className?: string;
	children: ReturnType<typeof html>;
	onClick?: () => void;
	onFileUpload?: (event: InputEvent) => void;
	disabled?: boolean;
}) => {
	const fileUploadRef = useRef<HTMLInputElement>(null);
	const onClickFileUpload = () => {
		fileUploadRef.current?.click();
	};
	return html`
		<button
			className="c-button c-button--${type} c-button--${size} ${disabled
				? "c-button--disabled"
				: ""} ${className}"
			onClick=${onFileUpload ? onClickFileUpload : onClick}
			disabled=${disabled}
		>
			${children}
		</button>
		${onFileUpload &&
		html`
			<input
				ref=${(ref: HTMLInputElement | null) => {
					fileUploadRef.current = ref;
				}}
				type="file"
				hidden
				onChange=${onFileUpload}
			/>
		`}
	`;
};
