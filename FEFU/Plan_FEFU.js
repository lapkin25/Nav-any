let planXML = `
<Plan object="FEFU">
  <Exit id="D1" name="Exit" floor="7" show_name="1" />
 
  <Floor num="7">
    <Path start="D1" type="no_walls" dir="up">
      <Point id="near_exit1" name="у входа" />
      <Stairs id="enter1_6to9" location="along" />
      <Wall/>
      <Path start="near_exit1" rotate="right" type="right_wall">
        <Point id="fork_near_exit1" name="развилка" />
        <Path start="fork_near_exit1" rotate="left" type="no_walls">
          <Point id="passage_level7_to_oriental_begin" name="passage" />
          <Point id="passage_level7_to_oriental_end" name="passage" />
        </Path>        
      </Path>
      <Path start="near_exit1" type="no_walls" rotate="left">
        <Point id="near_exit1_left" name="слева от входа" />
        <Path start="near_exit1_left" type="left_right_walls" rotate="right">
          <Point id="passage_level7_to_cafe_begin" name="passage" show_name="1" />
          <Point id="passage_level7_to_cafe_end" name="passage" show_name="1" />
          <Path start="passage_level7_to_cafe_end" type="left_right_walls" rotate="forward">
            <Room id="D751" location="left" />
            <Room id="D7_cafe" location="right" name="Cafe" />
            <Room id="D752" location="left" />
            <Point id="corner_near_D752" name="Turn to corridor" />
            <Path start="corner_near_D752" type="no_walls" rotate="right">
              <Stairs id="D755_4to7" location="along" />
              <Wall />
            </Path>
            <Path start="corner_near_D752" type="left_right_walls" rotate="left">
              <Room id="D755" location="left" />
              <Room id="D756" location="left" />
              <Elevator id="D757_3to7" location="right" />
              <Room id="D757" location="left" />
              <Toilet location="right" />
              <Room id="D758" location="left" />
              <Room id="D759" location="left" />
              <Room id="D773" location="right" />
              <Room id="D760" location="left" />
              <Room id="D772" location="right" />
              <Room id="D761" location="left" />
              <Room id="D771" location="right" />
              <Room id="D762" location="left" />
              <Room id="D770" location="right" />
              <Room id="D763" location="left" />
              <Room id="D769" location="right" />
              <Room id="D764" location="left" />
              <Room id="D768" location="right" />
              <Room id="D765" location="left" />
              <Room id="D767" location="right" />
              <Room id="D766" location="left" />
              <Wall />
            </Path>
          </Path>
        </Path>
      </Path>


    </Path>
  </Floor>

  <Floor num="9">
    <Stairs id="enter1_6to9" location="along" />

    <Stairs id="enter1_6to9" location="along" />
    <Path start="enter1_6to9" type="left_right_walls" dir="right">
      <Point id="passage_to_imct_begin" name="вход в ИМКТ" />
      <Path start="enter1_6to9" type="left_right_walls" rotate="back">
        <Point id="passage_level9_to_oriental_begin" name="вход в ВИ" /> 
      </Path>
      <Path start="passage_to_imct_begin" type="left_right_walls" rotate="forward">
        <Room id="D932" location="left" />
        <Room id="D961" location="right" />
        <Room id="D933" location="left" />
        <Elevator id="D933_9to7" location="right" />
        <Room id="D935" location="left" />
        <Toilet location="right" />
        <Room id="D936" location="left" />
        <Room id="D937" location="left" />
        <Room id="D956" location="right" />
        <Room id="D938" location="left" />
        <Room id="D955" location="right" />        
        <Room id="D940" location="left" />
        <Room id="D954" location="right" />             
        <Room id="D941" location="left" />
        <Room id="D953" location="right" />        
        <Room id="D942" location="left" />
        <Room id="D952" location="right" />        
        <Room id="D951" location="right" />        
        <Room id="D943" location="left" />
        <Room id="D950" location="right" />        
        <Room id="D944" location="left" />
        <Room id="D945" location="left" />
        <Room id="D949" location="right" />       
        <Room id="D946" location="left" />
        <Room id="D948" location="right" />        
        <Room id="D947" location="left" />
      </Path>
    </Path>    
  </Floor>
</Plan>
`