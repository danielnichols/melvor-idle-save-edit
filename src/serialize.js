import pako from "pako";

export function deserialize(stringSave) {
  const buf = Buffer.from(stringSave, "base64");
  console.log(Buffer.from(buf, "base64").toString());
  const uncompressed = pako.ungzip(Buffer.from(buf, "base64"), {
    to: "string"
  });
  // const uncompressed = pako.ungzip(buf, { to: "string" });
  console.log(uncompressed);
  const jsonSave = JSON.parse(uncompressed);

  return jsonSave;
}

export function serialize(jsonSave) {
  const uncompressed = JSON.stringify(jsonSave);
  const buf = Buffer.from(pako.gzip(uncompressed, { to: "string" }));
  const stringSave = buf.toString("base64");

  return stringSave;
}
