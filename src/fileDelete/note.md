// const getBase64 = (file) =>
// new Promise((resolve, reject) => {
// const reader = new FileReader();
// reader.readAsDataURL(file);
// reader.onload = () => resolve(reader.result);
// reader.onerror = (error) => reject(error);
// });

    // const beforeUpload = (file) => {
     //      const isTypeFile =
     //           file.type === "image/jpeg" || file.type === "image/png";
     //      if (!isTypeFile) {
     //           message.error("You can only upload JPG/PNG file !");
     //      }
     //      const isLt2M = file.size / 1024 / 1024 < 2;
     //      if (!isLt2M) {
     //           message.error("Image must smaller than 2MB!");
     //      }
     //      return isJpgOrPng && isLt2M;
     // };
     // const onValuesChange = async (values) => {
     //      try {
     //           await form.validateFields();
     //           setChecked(true);
     //      } catch (err) {
     //           setChecked(false);
     //      }
     // };
     // const handleChange = (file) => {
     //      getBase64((file) => {
     //           setImageUrl(file);
     //      });
     // };

{/_ <Form.Item
{...tailFormItemLayout}
name={"profilePicture"}
rules={[
{
required: true,
message: "Please upload a profile picture",
},
]} >
<Upload
                              name="avatar"
                              listType="picture"
                              multiple={false}
                              maxCount={1}
                              beforeUpload={beforeUpload}
                              onChange={handleChange}
                         >
{imageUrl ? (
<img
src={imageUrl}
alt="avatar"
style={{
                                             width: "100%",
                                        }}
/>
) : (
<Button icon={<UploadOutlined />}>
Click to Upload
</Button>
)}
</Upload>
</Form.Item> _/}

                    {/* <Form.Item
                         name="agreement"
                         valuePropName="checked"
                         rules={[
                              {
                                   validator: (_, value) =>
                                        value
                                             ? Promise.resolve(setChecked(true))
                                             : Promise.reject(
                                                    new Error(
                                                         "Should accept agreement"
                                                    ),
                                                    setChecked(false)
                                               ),
                              },
                         ]}
                         {...tailFormItemLayout}
                    >
                         <Checkbox>
                              I have read the{" "}
                              <a href="" style={{ color: "#fff" }}>
                                   agreement
                              </a>
                         </Checkbox>
                    </Form.Item> */}
