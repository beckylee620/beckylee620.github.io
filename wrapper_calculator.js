function calculate() {
    var gauge_form = document.getElementById("gauge_form");
    var body_form = document.getElementById("body_form");
    var garment_form = document.getElementById("garment_form");
    // var design_form = document.getElementById("design_form");

    var stitches_per_length = gauge_form.elements[0].value;
    var gauge_width = gauge_form.elements[1].value;
    var gauge_length = gauge_form.elements[2].value;

    var full_shoulder_width = body_form.elements[0].value;
    var upper_arm_length = body_form.elements[1].value;

    var body_circumference = garment_form.elements[0].value;
    var back_length = garment_form.elements[1].value;
    var collar_width = garment_form.elements[2].value;
    var collar_height = garment_form.elements[3].value;
    var upper_sleeve_circumference = garment_form.elements[4].value;
    var sleeve_length = garment_form.elements[5].value;
    var cuff_circumference = garment_form.elements[6].value;
    var cuff_length = garment_form.elements[7].value;
    // var divisor = design_form.elements[0].value;

/* problem if full_shoulder_width is wider than 1/2 body_circumference? */
/* fyi Math.round rounds to the nearest integer - Math.floor / Math.ceil */

    var body_circumference_total = Math.round(body_circumference / gauge_width * 10);
    var back_panel_stitches = Math.round(body_circumference_total / 2);
    back_panel_stitches += (back_panel_stitches % 2);
    var front_panel_start_stitches = Math.round(back_panel_stitches * .05);
    var shoulder_to_shoulder_stitches = Math.round(full_shoulder_width / gauge_width * 10);
    shoulder_to_shoulder_stitches += (shoulder_to_shoulder_stitches % 2);
    var shoulder_short_row_stitches = Math.round((back_panel_stitches - shoulder_to_shoulder_stitches) / 2);
    var shoulder_to_shoulder_stitches_adjusted = (back_panel_stitches - (shoulder_short_row_stitches * 2 ));
    var front_panel_end_stitches = Math.round(back_panel_stitches - shoulder_short_row_stitches);

    // var collar_minimum_stitches = Math.round((neck_circumference / 2) / gauge_width * 10);
    // var collar_maximum_stitches = Math.round(shoulder_to_shoulder_stitches_adjusted - 2); /* leave one each side */
    // var collar_wiggle_room = Math.round(collar_maximum_stitches - collar_minimum_stitches);
    // var collar_stitches_one_side = Math.round(collar_minimum_stitches + (0.4 * collar_wiggle_room));
    var collar_stitches_one_side = Math.round(collar_width / gauge_width * 10);
    collar_stitches_one_side -= (collar_stitches_one_side % 2);
    var shoulder_seam_stitches = Math.floor((shoulder_to_shoulder_stitches_adjusted - collar_stitches_one_side) / 2);
    // var collar_stitches_adjusted = (shoulder_to_shoulder_stitches_adjusted - (shoulder_seam_stitches * 2));
    var shoulder_seam_stitches_both = (shoulder_seam_stitches * 2);
    var collar_rows = Math.round((collar_height / gauge_length * 10) * 2);
    // accounting for the first row, which is in a separate instruction
    collar_rows = (collar_rows - 1);
    var collar_pickup = (collar_stitches_one_side * 3);
    var collar_total = (collar_stitches_one_side * 2);

    /* currently making the rise of the shoulder triangle 1/4 the length of the run */
    var shoulder_short_row_rows = Math.round((shoulder_short_row_stitches * (gauge_width / 10)) / 4 / gauge_length * 10);
    shoulder_short_row_rows -= (shoulder_short_row_rows % 2);
    var shoulder_short_row_iterations = Math.round(shoulder_short_row_rows / 2);
    var shoulder_short_row_decreases = Math.floor(shoulder_short_row_stitches / shoulder_short_row_iterations);
    var shoulder_short_row_instruction = shoulder_short_row_decreases - 1
    var shoulder_short_row_leftovers = (shoulder_short_row_stitches - (shoulder_short_row_iterations * shoulder_short_row_decreases));
    if (shoulder_short_row_leftovers == shoulder_short_row_decreases) {
      shoulder_short_row_leftovers = 0;
      shoulder_short_row_rows += 2;
      shoulder_short_row_iterations += 1;
    }
      else if (shoulder_short_row_leftovers != 0) {
      shoulder_short_row_rows += 2;
      var shoulder_short_row_leftovers_instruction = shoulder_short_row_leftovers - 1;
    }
    if (shoulder_short_row_leftovers == 0) {
      var shoulder_short_row_leftovers_instruction = "none";
    }


    /* not sure if these adjustments vvv will definitely always work out correctly - test!! */
    var front_panel_increases = Math.round(front_panel_end_stitches - front_panel_start_stitches);
/* if garter version -- subtract 2 stitches' width to account for icord cast-on/bind-off */
    back_length = back_length - (gauge_width / 10 * 2)
    sleeve_length = sleeve_length - (gauge_width / 10 * 2)
    var body_rows_total = Math.round(back_length / gauge_length * 10);
    body_rows_total += (body_rows_total % 2);
    var front_panel_increase_rate = Math.round(body_rows_total / front_panel_increases);
    var front_panel_increases_adjusted = Math.round(body_rows_total / front_panel_increase_rate);
    var front_panel_start_stitches_adjusted = Math.round(front_panel_end_stitches - front_panel_increases_adjusted);
    var cast_on = Math.round(back_panel_stitches + (front_panel_start_stitches_adjusted * 2));

    var a_to_square = (shoulder_short_row_stitches * (gauge_width / 10));
    var b_to_square = (shoulder_short_row_rows * (gauge_length / 10));
    var hypotenuse_length = (Math.pow((Math.pow(a_to_square, 2) + Math.pow(b_to_square, 2)), 0.5));

/// NEW SLEEVE CALCULATIONS

    var cuff_rows = Math.round(cuff_length / gauge_length * 10);
    cuff_rows += (cuff_rows % 2);
    var cuff_stitches = Math.round(cuff_circumference / gauge_width * 10);
    cuff_stitches -= (cuff_stitches % 2);
    var sleeve_minus_cuff_length = (sleeve_length - cuff_length);
    var sleeve_rows_straight = Math.round((upper_arm_length - hypotenuse_length) / gauge_length * 10);
    if (sleeve_minus_cuff_length < hypotenuse_length) { // just pick up and do cuff (make sure everything else is zero)
      sleeve_rows_straight = 0;
      var drop_sleeve_pickup_circumference = cuff_circumference;
      var drop_sleeve_pickup_stitches = cuff_stitches;
      var rows_between_sleeve_decreases = 0;
    } else {
      if (sleeve_rows_straight < 0) { // just start decreasing right away
        sleeve_rows_straight = 0;
      }
      var drop_sleeve_pickup_circumference = upper_sleeve_circumference;
      var drop_sleeve_pickup_stitches = Math.round(drop_sleeve_pickup_circumference / gauge_width * 10);
      drop_sleeve_pickup_stitches -= (drop_sleeve_pickup_stitches % 2);
      var sleeve_minus_cuff_rows = Math.round((sleeve_minus_cuff_length - hypotenuse_length) / gauge_length * 10);
      var sleeve_rows_decreasing = (sleeve_minus_cuff_rows - sleeve_rows_straight);
      var sleeve_decreases = (drop_sleeve_pickup_stitches - cuff_stitches);
      var sleeve_decrease_rate = Math.round(sleeve_rows_decreasing / sleeve_decreases);
      var sleeve_decreases_adjusted = (sleeve_rows_decreasing / sleeve_decrease_rate);
      sleeve_decreases_adjusted -= (sleeve_decreases_adjusted % 2);
      var cuff_stitches_adjusted = Math.round(drop_sleeve_pickup_stitches - sleeve_decreases_adjusted);
      var cuff_diff = (cuff_stitches_adjusted - cuff_stitches);
      cuff_stitches_adjusted -= cuff_diff;
      sleeve_rows_decreasing -= (sleeve_decrease_rate * cuff_diff);

      var rows_between_sleeve_decreases = (sleeve_decrease_rate - 1);
      if ((sleeve_rows_straight + (sleeve_rows_decreasing - (sleeve_decreases_adjusted * sleeve_decrease_rate))) > 0) {
        sleeve_rows_straight += (sleeve_rows_decreasing - (sleeve_decreases_adjusted * sleeve_decrease_rate));
      } else {
        sleeve_rows_straight = 0;
      }
    }

    var drop_sleeve_pickup_stitches_halved = (drop_sleeve_pickup_stitches / 2);
    var drop_sleeve_body_rows = Math.round((drop_sleeve_pickup_circumference / 2) / gauge_length * 10);
    /* note: the extra 2 rows being subtracted here account for the short row stitch pickup rows at the very top */
    drop_sleeve_body_rows -= ((drop_sleeve_body_rows % 2) + 2);
    /* it looks crazy but those same two rows need to be subtracted again here because they are NOT included in drop_sleeve_body_rows !! */
    var body_rows_before_sleeve = Math.round(body_rows_total - drop_sleeve_body_rows - shoulder_short_row_rows - 2);
    var drop_sleeve_pickup_stitches = Math.round(drop_sleeve_pickup_circumference / gauge_width * 10);
    drop_sleeve_pickup_stitches -= (drop_sleeve_pickup_stitches % 2);
    var drop_sleeve_pickup_stitches_halved = (drop_sleeve_pickup_stitches / 2);
/* this vvv needs to be math.ceil because if body_rows_before_sleeve is not evenly divisible by front_panel_increase_rate, that means you have done at least a single extra row in terms of increases, and the first row in that repeat is the increase row, so you have definitely increased at least once more. */
    var front_panel_pickup_stitches = (Math.ceil(body_rows_before_sleeve / front_panel_increase_rate) + front_panel_start_stitches_adjusted);
    if ((body_rows_before_sleeve % front_panel_increase_rate) == 0) {
      var first_step_worked_section_7 = "step 4/a (increase row)"
    } else {
      var first_step_worked_section_7 = "step 4/b, row ".concat(body_rows_before_sleeve % front_panel_increase_rate)
    }
    var rows_between_front_panel_increases = (front_panel_increase_rate - 1);

    var stitch_count_after_drop_sleeve_body_rows_1 = (Math.ceil((body_rows_before_sleeve + drop_sleeve_body_rows) / front_panel_increase_rate) + front_panel_start_stitches_adjusted);

    var stitch_count_after_drop_sleeve_body_rows_2 = (Math.ceil((body_rows_before_sleeve + drop_sleeve_body_rows + 1) / front_panel_increase_rate) + front_panel_start_stitches_adjusted);

    var body_stitches_before_sleeves = ((front_panel_pickup_stitches * 2) + back_panel_stitches);

    var icord_pickups = cast_on - 8
    /* +1 accounts for the final buffer row; +2 accounts for the rows of start and end stitches */
    var icord_rows = ((icord_pickups / 2) * 3) + 1 + 2

/* calculate yarn quantity */
/* if garter */
    var stitch_counter = (icord_rows * 4);
    /* all body rows together */
    var row_counter = 0;
    /* the cast-on number of stitches is only knitted for one row (pick-up row)
    before increasing starts; inc stitches before starting loop! */
    stitch_counter += cast_on;
    var current_stitches = cast_on;
    current_stitches += 2;

    while (row_counter < body_rows_total) {
      stitch_counter += (current_stitches * front_panel_increase_rate);
      current_stitches += 2;
      row_counter += front_panel_increase_rate;
    }

    /* subtracting shoulder short rows; adding a generous seaming quantity */
    row_counter = 0;
    var skipped_short_row_stitches = 0;
    while (row_counter < (shoulder_short_row_iterations * 2)) {
      row_counter += 2;
      skipped_short_row_stitches += (shoulder_short_row_decreases * row_counter);
    }
    if (shoulder_short_row_leftovers != 0) {
      skipped_short_row_stitches += (((shoulder_short_row_decreases * shoulder_short_row_iterations) +  shoulder_short_row_leftovers) * 2);
    }
    stitch_counter -= (skipped_short_row_stitches * 4);
    stitch_counter += ((shoulder_short_row_stitches + shoulder_seam_stitches) * 4);

    var body_yarn_quantity = Math.ceil((stitch_counter/stitches_per_length)*1.05);

    /* collar (accounts for grafting tail and first row, which was removed) */
    var collar_stitch_counter = ((collar_rows + 3) * (collar_stitches_one_side * 2));

    var collar_yarn_quantity = Math.ceil((collar_stitch_counter/stitches_per_length)*1.05);

    /* sleeves (accounts for pick-up and bind-off) */
    var sleeve_stitch_counter = (drop_sleeve_pickup_stitches * (sleeve_rows_straight + 1));
    current_stitches = (drop_sleeve_pickup_stitches - 1);
    while (current_stitches >= cuff_stitches_adjusted) {
      sleeve_stitch_counter += (sleeve_decrease_rate * current_stitches);
      current_stitches -= 1;
    }
    sleeve_stitch_counter += (cuff_stitches_adjusted * (cuff_rows + 2));

    /* count icord bind-off */
    sleeve_stitch_counter += ((cuff_stitches_adjusted + 3) * 1.5 * 4);
    var sleeve_yarn_quantity = Math.ceil((sleeve_stitch_counter/stitches_per_length)*1.05);

    var total_yarn_quantity = (body_yarn_quantity + collar_yarn_quantity + (sleeve_yarn_quantity * 2));

    document.getElementById("A-1_out").innerHTML = icord_rows;
    document.getElementById("A-2_out").innerHTML = icord_pickups;
    document.getElementById("A-3_out").innerHTML = cast_on;
    document.getElementById("B_out").innerHTML = body_rows_before_sleeve;
    document.getElementById("C_out").innerHTML = rows_between_front_panel_increases;
    document.getElementById("D_out").innerHTML = body_stitches_before_sleeves;
    document.getElementById("E-1_out").innerHTML = front_panel_pickup_stitches;
    document.getElementById("E-2_out").innerHTML = back_panel_stitches;
    document.getElementById("F_out").innerHTML = drop_sleeve_body_rows;
    document.getElementById("G-1_out").innerHTML = first_step_worked_section_7;
    document.getElementById("G-2_out").innerHTML = stitch_count_after_drop_sleeve_body_rows_1;
    document.getElementById("G-3_out").innerHTML = stitch_count_after_drop_sleeve_body_rows_2;
    document.getElementById("H_out").innerHTML = shoulder_short_row_rows;
    document.getElementById("I_out").innerHTML = shoulder_short_row_instruction;
    document.getElementById("J_out").innerHTML = shoulder_short_row_iterations;
    document.getElementById("K_out").innerHTML = shoulder_short_row_leftovers_instruction;
    document.getElementById("L_out").innerHTML = shoulder_short_row_stitches;
    document.getElementById("M_out").innerHTML = front_panel_end_stitches;
    document.getElementById("N-1_out").innerHTML = shoulder_seam_stitches;
    document.getElementById("N-2_out").innerHTML = shoulder_seam_stitches_both;
    document.getElementById("O-1_out").innerHTML = collar_stitches_one_side;
    document.getElementById("O-2_out").innerHTML = collar_pickup;
    document.getElementById("O-3_out").innerHTML = collar_total;
    document.getElementById("P_out").innerHTML = collar_rows;
    document.getElementById("Q_out").innerHTML = drop_sleeve_pickup_stitches_halved;
    document.getElementById("R_out").innerHTML = drop_sleeve_pickup_stitches;
    document.getElementById("S_out").innerHTML = sleeve_rows_straight;
    document.getElementById("T_out").innerHTML = rows_between_sleeve_decreases;
    document.getElementById("U_out").innerHTML = cuff_stitches_adjusted;
    document.getElementById("V_out").innerHTML = cuff_rows;
    document.getElementById("yarn_total_out").innerHTML = total_yarn_quantity;
    document.getElementById("yarn_body_out").innerHTML = body_yarn_quantity;
    document.getElementById("yarn_collar_out").innerHTML = collar_yarn_quantity;
    document.getElementById("yarn_sleeve_out").innerHTML = sleeve_yarn_quantity;
}
