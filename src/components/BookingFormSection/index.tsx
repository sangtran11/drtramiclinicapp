import React, { useMemo, useRef } from "react";
import {
  Center,
  Container,
  rem,
  Title,
  createStyles,
  Grid,
  Select,
  Button,
} from "@mantine/core";
import { ZodIssueCode, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  TextInput,
  NumberInput,
  DateInput,
  Checkbox,
} from "react-hook-form-mantine";
import { listInputForm, isEmail } from "@/constants";
import { notifications } from "@mantine/notifications";
import emailjs from "@emailjs/browser";

const DEFAULT_VALUE = {
  fullName: "",
  phone: "",
  email: "",
  dateString: null,
  timeString: "",
  service: [],
};

const useStyles = createStyles((theme) => ({
  root: {
    height: "auto",
    maxHeight: rem(1000),
    backgroundImage: 'url("/images/bg-dat-lich-hen.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    paddingLeft: 0,
    paddingRight: 0,
  },
  formWrapper: {
    padding: `${rem(32)} 0`,
    maxWidth: "50%",
    margin: "0 auto",
    boxShadow: "0px 5px 40px 0px rgba(0, 0, 0, 0.05)",
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      margin: "0",
    },
  },
  formContainer: {
    width: "100%",
    padding: `0 ${rem(60)}`,
    [theme.fn.smallerThan("md")]: {
      padding: `0 ${rem(20)}`,
    },
  },
  buttonSubmit: {
    width: "100%",
    backgroundColor: theme.colors.clinicRose[0],
    textTransform: "uppercase",
    opacity: 0.9,
    borderRadius: rem(32),
    "&:hover": {
      backgroundColor: theme.colors.clinicRose[0],
      opacity: 1,
    },
  },
}));

const BookingFormSection = () => {
  const { classes } = useStyles();
  const formRef = useRef<HTMLFormElement>(null);

  const schema = useMemo(() => {
    const schemaObject: any = {
      fullName: z
        .string()
        .min(1, { message: "Quý khách vui lòng nhập họ và tên" }),
      phone: z
        .number()
        .or(
          z
            .string()
            .min(1, { message: "Quý khách vui lòng nhập số điện thoại" }),
        ),
      email: z.string().superRefine((value, ctx) => {
        if (!value) return true;
        if (value && !isEmail(value)) {
          return ctx.addIssue({
            code: ZodIssueCode.custom,
            message: "Email không hợp lệ",
          });
        }
      }),
      dateString: z.union([z.date(), z.null()]).superRefine((value, ctx) => {
        if (!value) {
          return ctx.addIssue({
            code: ZodIssueCode.custom,
            message: "Quý khách vui lòng chọn ngày",
          });
        }
      }),
      timeString: z.string().min(1, { message: "Quý khách vui lòng chọn giờ" }),
      service: z.array(z.string()).superRefine((value, ctx) => {
        if (!value || value.length === 0) {
          return ctx.addIssue({
            code: ZodIssueCode.custom,
            message: "Quý khách vui lòng chọn dịch vụ",
          });
        }
      }),
    };

    return z.object(schemaObject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  type FormSchemaType = z.infer<typeof schema>;

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: DEFAULT_VALUE,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = (data: FormSchemaType) => {
    const formatter = new Intl.DateTimeFormat("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const payload = {
      fullName: `${data.fullName}`,
      phone: `${data.phone}`,
      email: `${data.email}` || "/",
      dateString: `${data.timeString} ${formatter.format(new Date(data.dateString))}`,
      service: data.service.join(", ") || "/",
    };
    emailjs
      .send("service_w3732ka", "template_jrfb7gn", payload, "PY52_wyUPS3oyOhgx")
      // .send("service_bxuo249", "template_dksu16l", payload, "-tb6KuwG144fN1BiM") // email: sontran
      .then(
        (result) => {
          console.log("send:", result.text);
          notifications.show({
            autoClose: 2000,
            title: "Xác Nhận",
            message: "Đặt Lịch Thành Công",
            styles: () => ({
              root: {
                "&::before": { backgroundColor: "green" },
              },
              title: { fontSize: rem(20), color: "green", fontWeight: 600 },
              description: { fontSize: rem(16) },
            }),
          });
        },
        (error) => {
          console.log("error", error);
          notifications.show({
            autoClose: 4000,
            title: "Đặt Lịch Thất Bại",
            message: "Vui lòng liên hệ qua số điện thoại: 0903 065 445",
            styles: () => ({
              root: {
                "&::before": { backgroundColor: "red" },
              },
              title: { fontSize: rem(20), color: "red", fontWeight: 600 },
              description: { fontSize: rem(16) },
            }),
          });
        },
      );
    reset();
  };

  return (
    <Container fluid mb={rem(60)} py={rem(80)} className={classes.root}>
      <Container fluid className={classes.formWrapper}>
        <Center mx="auto">
          <Title color="clinicBlue.0" fz={rem(28)} mb={rem(16)} ta="center">
            ĐẶT LỊCH HẸN
          </Title>
        </Center>
        <form
          className={classes.formContainer}
          onSubmit={handleSubmit(onSubmit)}
          ref={formRef}
        >
          <Grid gutter="xs">
            {listInputForm.map((input, index) => (
              <React.Fragment key={index}>
                {input.type === "text" && (
                  <Grid.Col span={12}>
                    <TextInput
                      key={index}
                      name={input.name}
                      control={control}
                      defaultValue=""
                      label={input.label}
                      placeholder={input.placeholder}
                      error={errors[input.name]?.message as string}
                      withAsterisk={input.isRequired}
                      mb={rem(16)}
                    />
                  </Grid.Col>
                )}
                {input.type === "number" && (
                  <Grid.Col span={12}>
                    <NumberInput
                      key={index}
                      type="number"
                      hideControls
                      name={input.name}
                      control={control}
                      defaultValue=""
                      label={input.label}
                      placeholder={input.placeholder}
                      error={errors[input.name]?.message as string}
                      withAsterisk={input.isRequired}
                      mb={rem(16)}
                    />
                  </Grid.Col>
                )}
                {input.type === "dateInput" && (
                  <Grid.Col lg={6}>
                    <DateInput
                      clearable
                      defaultValue={null}
                      control={control}
                      key={index}
                      valueFormat="DD-MM-YYYY"
                      name={input.name}
                      label={input.label}
                      placeholder={input.placeholder}
                      error={errors[input.name]?.message as string}
                      withAsterisk={input.isRequired}
                      mb={rem(16)}
                    />
                  </Grid.Col>
                )}
                {input.type === "select" && (
                  <Grid.Col lg={6}>
                    <Controller
                      name={input.name}
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Select
                          key={index}
                          {...field}
                          clearable
                          label={input.label}
                          placeholder={input.placeholder ?? ""}
                          error={errors[input.name]?.message as string}
                          withAsterisk={input.isRequired}
                          mb={rem(8)}
                          data={input.options || []}
                          onChange={(value) =>
                            field.onChange(value === null ? "" : value)
                          }
                        />
                      )}
                    />
                  </Grid.Col>
                )}
                {input.type === "checkbox" && (
                  <Grid.Col span={12}>
                    <Checkbox.Group
                      control={control}
                      name={input.name}
                      key={index}
                      defaultValue={[]}
                      label={input.label}
                      withAsterisk={input.isRequired}
                      error={errors[input.name]?.message as string}
                      mb={rem(16)}
                    >
                      <Grid mt={rem(4)}>
                        {input.options &&
                          input.options.map((option, index) => (
                            <Grid.Col span={6} key={index} mb={rem(12)}>
                              <Checkbox
                                value={option}
                                label={option}
                                color="clinicRose.0"
                                name={option}
                                control={control}
                              />
                            </Grid.Col>
                          ))}
                      </Grid>
                    </Checkbox.Group>
                  </Grid.Col>
                )}
              </React.Fragment>
            ))}
          </Grid>
          <Button className={classes.buttonSubmit} type="submit" mt={rem(12)}>
            ĐẶT LỊCH HẸN
          </Button>
        </form>
      </Container>
    </Container>
  );
};

export default BookingFormSection;
