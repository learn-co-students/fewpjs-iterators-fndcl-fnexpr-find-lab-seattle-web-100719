function superbowlWin(record)
{
  let recordFound = record.find(function(e) { return e["result"] === "W" });
  if (recordFound != undefined)
  {
    return recordFound["year"];
  }
  else
  {
    return undefined;
  }
}
